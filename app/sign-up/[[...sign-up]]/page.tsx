import { SignUp } from "@clerk/nextjs";

const isClerkConfigured =
  !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
  !!process.env.CLERK_SECRET_KEY &&
  !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes("placeholder") &&
  !process.env.CLERK_SECRET_KEY.includes("placeholder");

export default function SignUpPage() {
  if (!isClerkConfigured) {
    return (
      <main style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', backgroundColor: '#09090b', color: '#fff', fontFamily: 'sans-serif' }}>
        <div style={{ textAlign: 'center', maxWidth: 480 }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>Registration not configured</h1>
          <p style={{ color: '#a1a1aa', lineHeight: 1.6 }}>
            Set valid Clerk credentials to enable the sign-up flow for this app.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', backgroundColor: '#09090b' }}>
      <SignUp />
    </main>
  );
}
