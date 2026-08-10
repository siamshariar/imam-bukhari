import Image from "next/image";
import { server } from "../lib/config";

const RichText = ({ content }) => {
  if (!content) return null;

  const renderChild = (child, index) => {
    if (child.type === "text") {
      const textWithLineBreaks = child.text.split('\n').map((text, i, array) =>
        i === array.length - 1 ? text : <>{text}<br /></>
      );

      if (child.bold && child.italic) {
        return <b key={index}><i>{textWithLineBreaks}</i></b>;
      } else if (child.bold) {
        return <b key={index}>{textWithLineBreaks}</b>;
      } else if (child.italic) {
        return <i key={index}>{textWithLineBreaks}</i>;
      }
      return <span key={index}>{textWithLineBreaks}</span>;
    } else if (child.type === "link") {
      return (
        <a key={index} href={child.url}>
          <span>
            {child.children.map((linkChild, linkIndex) => renderChild(linkChild, `${index}-${linkIndex}`))}
          </span>
        </a>
      );
    }
    return null;
  };

  const isMultiline = (children) =>
    children.some((child) => child.type === "text" && child.text?.includes('\n'));

  return (<div className="rich-text">{content.map((block, blockIndex) => {
    if (block.type === "heading") {
      const HeadingTag = `h${block.level || 1}`;
      return (
        <HeadingTag
          key={`heading-${blockIndex}`}
          className={isMultiline(block.children) ? "multiline" : undefined}
        >
          {block.children.map((child, index) => renderChild(child, `heading-${blockIndex}-${index}`))}
        </HeadingTag>
      );
    } else if (block.type === "paragraph") {
      const isBlank = block.children.every(
        (child) => child.type === "text" && !child.text?.trim()
      );
      if (isBlank) return null;
      return (
        <p key={`paragraph-${blockIndex}`}>
          {block.children.map((child, index) => renderChild(child, `paragraph-${blockIndex}-${index}`))}
        </p>
      );
    } else if (block.type === "quote") {
      return (
        <blockquote key={`quote-${blockIndex}`} className="border-l-4 border-gray-300 pl-4 my-4 italic">
          {block.children.map((child, index) => renderChild(child, `quote-${blockIndex}-${index}`))}
        </blockquote>
      );
    } else if (block.type === "list") {
      const ListTag = block.format === "ordered" ? "ol" : "ul";
      return (
        <ListTag key={`list-${blockIndex}`}>
          {block.children.map((listItem, itemIndex) => (
            <li key={`list-item-${blockIndex}-${itemIndex}`}>
              {listItem.children.map((child, childIndex) =>
                renderChild(child, `list-item-${blockIndex}-${itemIndex}-${childIndex}`)
              )}
            </li>
          ))}
        </ListTag>
      );
    } else if (block.type === "image" && block.image?.url) {
      const imageUrl = block.image.url.startsWith('http')
        ? block.image.url
        : `${server}${block.image.url}`;

      return (
        <div key={`image-${blockIndex}`} className="my-4 flex justify-center">
          <div className="relative">
            <Image
              src={imageUrl}
              alt={block.image.alternativeText || ''}
              width={block.image.width}
              height={block.image.height}
              style={{ objectFit: 'contain', objectPosition: 'center center' }}
              loading="eager"
              unoptimized
            />
          </div>
        </div>
      );
    }
    return null;
  })}</div>)
};

export default RichText;
