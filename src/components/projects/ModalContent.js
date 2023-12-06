export default function ModalContent({ onClose }, body) {
  return (
    <div className="modal">
      <div>I'm a modal dialog</div>
      <body></body>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
