// ===== Components ===== //

// ===== Constants ===== //

// ===== Helpers ===== //

// ===== Interfaces ===== //

// ===== Redux ===== //

export default function AppFooter() {
  const year = new Date().getFullYear();

  return (
    <div
      data-testid="app-footer"
      className="h-12 w-100 bg-meadow justify-items-center content-center"
    >
      <p data-testid="app-footer-text" className="text-white font-bold">
        Kevin L Copyright {year}
      </p>
    </div>
  );
}
