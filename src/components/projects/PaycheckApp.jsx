export default function PaycheckApp({ onClose }, body) {
  return (
    <div className="modal">
      <div>I'm a Money dialog</div>
      <body></body>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
