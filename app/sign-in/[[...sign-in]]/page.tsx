import { SignIn } from "@clerk/nextjs";

const isClerkConfigured =
  !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
  !!process.env.CLERK_SECRET_KEY &&
  !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes("placeholder") &&
  !process.env.CLERK_SECRET_KEY.includes("placeholder");

export default function SignInPage() {
  if (!isClerkConfigured) {
    return (
      <main style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', backgroundColor: '#09090b', color: '#fff', fontFamily: 'sans-serif' }}>
        <div style={{ textAlign: 'center', maxWidth: 480 }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>Authentication not configured</h1>
          <p style={{ color: '#a1a1aa', lineHeight: 1.6 }}>
            Add a valid Clerk publishable and secret key in your environment to enable sign-in.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', backgroundColor: '#09090b' }}>
      <SignIn />
    </main>
  );
}
