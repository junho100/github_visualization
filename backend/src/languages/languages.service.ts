import { Injectable } from '@nestjs/common';
import { Octokit } from '@octokit/rest';
import axios from 'axios';

@Injectable()
export class LanguagesService {
  getConditionalLanguages(username, ignores) {
    return;
  }

  async getLanguages(username) {
    return process.env.GIT_TOKEN;
    const octokit = new Octokit({
      auth: process.env.GIT_TOKEN,
    });
    const { data } = await octokit.request('GET /users/{username}/repos', {
      username: username,
    });
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
