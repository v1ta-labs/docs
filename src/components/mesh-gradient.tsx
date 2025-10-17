'use client';

export function MeshGradient() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Large gradient orbs with blur */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-20 animate-float"
        style={{
          background: 'radial-gradient(circle, rgba(42, 73, 48, 0.4) 0%, rgba(42, 73, 48, 0) 70%)',
          filter: 'blur(80px)',
          animationDuration: '8s',
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-15 animate-float"
        style={{
          background: 'radial-gradient(circle, rgba(58, 89, 64, 0.4) 0%, rgba(58, 89, 64, 0) 70%)',
          filter: 'blur(90px)',
          animationDuration: '10s',
          animationDelay: '2s',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-10 animate-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(42, 73, 48, 0.3) 0%, rgba(42, 73, 48, 0) 60%)',
          filter: 'blur(100px)',
          animationDuration: '6s',
        }}
      />

      {/* Directional light rays */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-5"
        style={{
          background: 'linear-gradient(135deg, rgba(42, 73, 48, 0.3) 0%, transparent 50%, rgba(58, 89, 64, 0.2) 100%)',
        }}
      />
    </div>
  );
}
