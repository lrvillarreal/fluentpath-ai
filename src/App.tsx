import { useState } from 'react'

export default function App() {
  const [selectedLevel, setSelectedLevel] = useState<'A2' | 'B1' | null>(null)

  return (
    <main>
      <h1>FluentPath AI</h1>
      <p>Your English learning adventure.</p>

      <section aria-labelledby="profile-heading">
        <h2 id="profile-heading">Choose your profile</h2>

        <button
          type="button"
          aria-pressed={selectedLevel === 'A2'}
          onClick={() => setSelectedLevel('A2')}
        >
          A2 · Elementary
        </button>

        <button
          type="button"
          aria-pressed={selectedLevel === 'B1'}
          onClick={() => setSelectedLevel('B1')}
        >
          B1 · Intermediate
        </button>

        <p aria-live="polite">
          {selectedLevel ? `Selected profile: ${selectedLevel}` : 'Choose A2 or B1 to begin.'}
        </p>
      </section>
    </main>
  )
}