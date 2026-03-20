# S-Call - Video & Audio Calling Platform

S-Call is a modern web-based calling application that allows users to make audio and video calls, send messages, and manage contacts.

## Features

### User Authentication
- **Registration**: Phone number, username, and password
- **Login**: Phone number and password authentication
- **Profile Management**: Update profile information

### Calling Features
- **Audio Calls**: Crystal clear audio communication
- **Video Calls**: HD video calling
- **Contact Search**: Find other users by phone number or username
- **Contact Sync**: Import contacts from phone
- **Call History**: View past calls

### Messaging
- **Text Messages**: Send and receive messages
- **Message History**: Access past conversations
- **Real-time Notifications**: Instant message delivery

### Contact Management
- **Contact List**: View all saved contacts
- **Online Status**: See who is available
- **Favorite Contacts**: Mark important contacts
- **Block Users**: Block unwanted contacts

## Tech Stack

### Frontend
- React.js / Next.js
- Tailwind CSS
- Socket.io Client
- WebRTC

### Backend
- Node.js + Express.js
- MongoDB
- JWT Authentication
- Socket.io
- WebRTC Signaling

### Additional Services
- Twilio / Agora SDK (for reliable calling)
- Firebase Storage (for profile pictures)

## Project Structure

```
S-call/
├── frontend/          # React.js application
├── backend/           # Node.js + Express server
├── docs/              # Documentation
└── README.md
```

## Installation

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
npm start
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

## API Documentation

See [API_DOCS.md](./docs/API_DOCS.md) for complete API endpoints.

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## License

MIT License - see LICENSE file for details

## Contact

For support, email: support@s-call.com