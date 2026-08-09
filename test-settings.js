// Test script to check settings API
import { getSettings } from './lib/apiV/settings.js';

async function testSettings() {
  console.log('Testing settings API...');
  try {
    const settings = await getSettings();
    console.log('Settings result:', settings);
  } catch (error) {
    console.error('Error testing settings:', error);
  }
}

testSettings();
