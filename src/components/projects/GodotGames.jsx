export default function GodotGames({ onClose }, body) {
  return (
    <div className="modal">
      <div>I'm a Godot dialog</div>
      <body></body>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
