# Secure_AR RESTful API

## Getting Started

- This API support **Windows**, **Linux** and **MAC OS**
- Please download & install [NodeJS](https://nodejs.org/en/download/)

## How to start

- Clone this git ,
>>>
git clone https://gitlab.com/ardhicaturk3/securearbackend.git
>>>
- Extract file into specified folder,
- Run Terminal/Command-prompt,
- Move to folder where you extract this git, (You can use cd ..)
- Run program using:
>>>
node index.js
>>>

## Default config

- Using port **:3000** for html request,
- Using MongoDB with mongoosejs, you can edit **./api/auth/db.js** as your own mongoDB host.
- You can edit this token secret key inside of **./api/auth/config.js**,
- Using socket.io to comunicated between device and server, ready on port **:3000**

## Refference

- **Register**
| URL | Methode | Data Request | Callback |
| ------ | ------ | ------ | ------ |
| localhost:3000/api/auth/register | POST | {name, email, pin, noHp, noKtp} | {_status, message} |
| header | header |
| ------ | ------ |
| cell | cell |
| cell | cell | 
- **Login**
| URL | Methode | Data Request | Callback |
| ------ | ------ | ------ | ------ |
| localhost:3000/api/auth/login | POST | {email, pin} | {_status, auth, message, token} |

- **Check token**
| URL | Methode | Data Request | Callback |
| ------ | ------ | ------ | ------ |
| localhost:3000/api/auth/check | GET | {} | {_status, auth, token} |

- **Logout**
| URL | Methode | Data Request | Callback |
| ------ | ------ | ------ | ------ |
| localhost:3000/api/auth/logout | POST | {} | {_status:false, auth:false, token:null} |

- **Read user profile**
- **Edit user profile**
- **Add device**
- **Edit device info**
- **Read device info**
- **Delete specified device**
- **Send command Lock/Unlock**
