import { Injectable } from '@nestjs/common';
import { Octokit } from 'octokit';

@Injectable()
export class LanguagesService {
  async getTotalLanguages(username) {
    const octokit = new Octokit({
      auth: process.env.GIT_TOKEN,
    });
    const response = await octokit.request('GET /users/{username}/repos', {
      username: username,
    });
    const data = response.data;
    let userTotal = 0;
    for (let i = 0; i < data.length; i++) {
      const { data: d } = await octokit.request(data[i].languages_url);
      const dKeys = Object.keys(d);
      for (let j = 0; j < dKeys.length; j++) {
        userTotal += parseInt(d[dKeys[j]]);
      }
    }
    return userTotal;
  }

  async getConditionalLanguages(username, ignores) {
    const octokit = new Octokit({
      auth: process.env.GIT_TOKEN,
    });
    const response = await octokit.request('GET /users/{username}/repos', {
      username: username,
    });
    const data = response.data;
    const userResult = {};
    for (let i = 0; i < data.length; i++) {
      const { data: d } = await octokit.request(data[i].languages_url);
      const dKeys = Object.keys(d);
      for (let j = 0; j < dKeys.length; j++) {
        if (Object.keys(userResult).includes(dKeys[j])) {
          userResult[dKeys[j]] += parseInt(d[dKeys[j]]);
        } else {
          if (ignores.includes(dKeys[j])) {
            continue;
          }
          userResult[dKeys[j]] = parseInt(d[dKeys[j]]);
        }
      }
    }
    return userResult;
  }

  async getLanguages(username) {
    const octokit = new Octokit({
      auth: process.env.GIT_TOKEN,
    });
    const response = await octokit.request('GET /users/{username}/repos', {
      username: username,
    });
    const data = response.data;
    const userResult = {};
    for (let i = 0; i < data.length; i++) {
      const { data: d } = await octokit.request(data[i].languages_url);
      const dKeys = Object.keys(d);
      for (let j = 0; j < dKeys.length; j++) {
        if (Object.keys(userResult).includes(dKeys[j])) {
          userResult[dKeys[j]] += parseInt(d[dKeys[j]]);
        } else {
          userResult[dKeys[j]] = parseInt(d[dKeys[j]]);
        }
      }
    }
    return userResult;
  }
}
