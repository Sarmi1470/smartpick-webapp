# SmartPick: The AI Wingman for Your Wardrobe

**SmartPick** is a web-based prototype of an AI-driven product decision kiosk for retail stores. It helps customers make confident product choices by scanning products and answering a short quiz.

## Features
- Scan product barcodes/QR codes
- Dynamic AI-driven quiz to analyze customer preferences
- Personalized recommendations based on quiz responses
- Modern, responsive UI/UX for in-store tablets
- Placeholder for backend integration (future)

## Tech Stack
- Frontend: ReactJS, TailwindCSS
- Barcode/QR Scanning: react-zxing
- UI Icons: lucide-react
- State Management: React Hooks

**For now the the product in focus are books. This webapp scans the ISBN qr behind the books and reports on screens with the digits. 
next to come: take the digits and map it back to an exstining databse on books and feed the AI with the book data so it can lead to a dynamic quiz and make confident product choices for the customer.**

## How to Run Locally
1. Clone the repo
2. Install dependencies : npm install
3. In cmd run ther server: npm run dev
4. ctrl + click on the link, q to quit.
