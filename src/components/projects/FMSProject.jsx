export default function FMSProject({ onClose }, body) {
  return (
    <div className="modal">
      <div>Im the farm App</div>
      <body></body>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
