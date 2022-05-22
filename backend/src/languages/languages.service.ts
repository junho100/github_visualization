import { Injectable } from '@nestjs/common';
import { Octokit } from 'octokit';
import axios from 'axios';

@Injectable()
export class LanguagesService {
  getConditionalLanguages(username, ignores) {
    return;
  }

  async getLanguages(username) {
    const octokit = new Octokit({
      auth: process.env.GIT_TOKEN,
    });
    const response = await octokit.request('GET /users/{username}/repos', {
      username: username,
    });
    console.log(response);
    const data = response.data;
    const userResult = {};
    data.forEach(async (d) => {
      const langData = await axios.get(d.languages_url);
      for (const key in langData) {
        if (userResult[key]) {
          userResult[key] += parseInt(langData[key]);
        } else {
          userResult[key] = parseInt(langData[key]);
        }
      }
    });
    return userResult;
  }
}
