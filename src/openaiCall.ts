//////////////////////////importing neccessary packages//////////////////////////////
import { Configuration, OpenAIApi } from "openai";
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

////////////////////////passing apikey to access openai/////////////////////////////
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


////////////////////////////////////////////declaring type explicitly//////////////////////////

class OpenAIChoice {
  text: string;
}

class OpenAIResponse {
  choices: OpenAIChoice[];
}


///////////////////////////////prompt function////////////////////////////////
export async function openAICall(prompt: string): Promise<string> {
  try {
    console.log("openai working on given prompt......");

    //fetching data from openai
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: `${prompt}`,
        max_tokens: 2048,
        temperature: 0.75,
      }),
    });

    //destructuring data
    const { choices } = (await response.json()) as OpenAIResponse;
    const mainData = choices[0].text.trim();
    console.log(`OpenAI Response : ${mainData}`);
    return mainData;
  } catch (err) {
    if (err) {
      console.log(err.message);
    }
  }
}