# Secure_AR RESTful API

## Getting Started

- This API support **Windows**, **Linux** and **MAC OS**
- Please download & install [NodeJS](https://nodejs.org/en/download/)

## How to start

- Clone this git ,
>>>
git clone https://github.com/ardhicaturk/securearbackend.git
>>>
- Extract file into specified folder,
- Run Terminal/Command-prompt,
- Move to folder where you extract this git, (You can use cd ..)
- Run program using:
>>>
node index.js
>>>

## Default config

- Using port **:3000** for http request,
- Using MongoDB with mongoosejs, you can edit **./api/auth/db.js** as your own mongoDB host.
- You can edit this token secret key inside of **./api/auth/config.js**,
- Using socket.io to comunicated between device and server, ready on port **:3000**

## Refference

- ### Authentification

-- **Register**

| URL | Methode | Data Request | Callback |
| --- | --- | --- | --- |
| /api/auth/register | POST | {name, email, pin, noHp, noKtp} | {_status, message} |

-- **Login**

| URL | Methode | Data Request | Callback |
| ------ | ------ | ------ | ------ |
| /api/auth/login | POST | {email, pin} | {_status, auth, message, token} |

-- **Check token**

| URL | Methode | Data Request | Callback |
| ------ | ------ | ------ | ------ |
| /api/auth/check | GET | {} | {_status, auth, token} |

-- **Logout**

| URL | Methode | Data Request | Callback |
| ------ | ------ | ------ | ------ |
| /api/auth/logout | POST | {} | {_status:false, auth:false, token:null} |

- ### User info
-- **Read user profile**

| URL | Methode | Data Request | Callback |
| ------ | ------ | ------ | ------ |
| /api/userinfo/readProfile | POST | {email} | {_status} |

-- **Edit user profile**

| URL | Methode | Data Request | Callback |
| ------ | ------ | ------ | ------ |
| /api/userinfo/editProfile | POST | {name, email, pin, noHp, noKtp} | {_status} |

-- **Add device**

| URL | Methode | Data Request | Callback |
| ------ | ------ | ------ | ------ |
| /api/userinfo/addMyDevice | POST | {email, HWID, deviceName} | {_status} |

-- **Edit device info**

| URL | Methode | Data Request | Callback |
| ------ | ------ | ------ | ------ |
| /api/userinfo/editMyDevice | POST | {email, HWID, deviceName} | {_status} |

-- **Read device info**

| URL | Methode | Data Request | Callback |
| ------ | ------ | ------ | ------ |
| /api/userinfo/readMyDevice | POST | {email} | {_status, devices:{HWID, deviceName}} |

-- **Delete specified device**

| URL | Methode | Data Request | Callback |
| ------ | ------ | ------ | ------ |
| /api/userinfo/deleteMyDevice | POST | {email, HWID} | {_status} |

- ### Device Control
-- **change parameter info of device**

| URL | Methode | Data Request | Callback |
| ------ | ------ | ------ | ------ |
| /api/device/editDevice | POST | {socketid, pinLock, lockState, lastLock, lastOpen, [rfid], [fingercode]} | {_status} |

-- **findDevice**

| URL | Methode | Data Request | Callback |
| ------ | ------ | ------ | ------ |
| /api/device/findDevice | POST | {HWID} | {owner, socketid, pinLock, lockState, lastLock, lastOpen, [rfid], [fingercode]} |

-- **Server Socket listener**

| Listener | data |
| --- | --- |
| connect | {HWID} |
| sync | {} |
| lock | {HWID, state} |

-- **Server Socket emit room**

| room | data |
| --- | --- |
| control | {lock} |
