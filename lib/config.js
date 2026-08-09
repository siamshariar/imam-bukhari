export const server =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://www.ImamBukhariTrust.com/";
    
export const apiServer = 
  (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')
    ? "https://motivated-card-73d0ae5c51.strapiapp.com"
    : "https://motivated-card-73d0ae5c51.strapiapp.com";

export const youtubeKeys = {
  key1: "AIzaSyADJS1U8lXxlXKSlnZ1BY4WND_t-qR2Sjo",
  key2: "AIzaSyBRBEGzZBcosd6-71S_86Q-avOWTEDRxKg",
  key3: "AIzaSyDR2BjErw_CLIZPYJOcAH5OwUQVQxfPV6A",
  key4: "AIzaSyC61nTv7iAPinxgUBP1f1TfVGoHGgmmtmc",
  key5: "AIzaSyCcD0RPJcjiFjjmkWJWqVF-jrkjXrX8u3Y",
};

export const youtube = {
  url: "https://www.googleapis.com/youtube/v3",
  key: youtubeKeys.key1,
  channelID: "UCBTHMWdAFuQ5ynEryDIWdRw",
  uploadPlaylistID: "UUBTHMWdAFuQ5ynEryDIWdRw",
};

export const constants = {
  DEFAULT_PAGE_LIMIT: 12,
  MAX_YOUTUBE_PAGE_LIMIT: 50,
  YOUTUBE_RELATED_VIDEOS_PAGE_LIMIT: 4,
  YOUTUBE_HOME_PAGE_RECENT_VIDEOS: 6,
};

export const gMap = {
  lat: 23.863567,
  lng: 90.3884443,
  apiKey: "AIzaSyC9lcz-NwXEXyxR5JZ9AX9Nc7dHgfUSbME", // TODO: update
};
