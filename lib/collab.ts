// WebTransport provider will be used in production; for MVP we use WebSocket fallback
export function connectToProject(projectId: string, userId: string) {
  // Minimal CRDT doc shim until abyo-crdt is integrated
  const doc = {
    applyUpdate: (_update: Uint8Array) => {},
    on: (_event: string, _cb: any) => {},
  };

  const workerUrl = process.env.NEXT_PUBLIC_CF_WORKER_URL || 'wss://collab.peregrine.dev';
  const ws = new WebSocket(`${workerUrl}/ws?project=${projectId}&user=${userId}`);

  ws.onmessage = (event) => {
    const data = typeof event.data === 'string'
      ? new TextEncoder().encode(event.data)
      : new Uint8Array(event.data);
    doc.applyUpdate(data);
  };

  return {
    doc,
    send: (update: Uint8Array) => {
      if (ws.readyState === WebSocket.OPEN) ws.send(update);
    },
  };
}
