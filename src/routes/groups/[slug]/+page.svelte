<script>
  let { data } = $props();

  const groupData = {
    'barcelona-trip': {
      name: 'Barcelona Trip',
      settlement: 'Du → Laura',
      settlementAmount: 72.4,
      expenses: [
        {
          date: 'Sonntag, 28.07',
          title: 'Tapas-Abendessen',
          person: 'Sofia',
          amount: 124.9
        },
        {
          date: 'Samstag, 27.07',
          title: 'Einkauf im Supermarkt',
          person: 'Laura',
          amount: 86.35
        },
        {
          date: 'Samstag, 27.07',
          title: 'Taxi vom Flughafen',
          person: 'Marco',
          amount: 38.5
        },
        {
          date: 'Freitag, 26.07',
          title: 'Airbnb Barcelona',
          person: 'Niwes',
          amount: 640.0
        }
      ]
    },

    'wg-zuerich': {
      name: 'WG Zürich',
      settlement: 'Du → Marco',
      settlementAmount: 24.8,
      expenses: [
        {
          date: 'Donnerstag, 01.08',
          title: 'Wocheneinkauf Coop',
          person: 'Marco',
          amount: 92.4
        },
        {
          date: 'Mittwoch, 31.07',
          title: 'Internetrechnung',
          person: 'Niwes',
          amount: 59.9
        },
        {
          date: 'Dienstag, 30.07',
          title: 'Putzmittel',
          person: 'Laura',
          amount: 18.1
        }
      ]
    },

    freunde: {
      name: 'Freunde',
      settlement: 'Sofia → Du',
      settlementAmount: 15.5,
      expenses: [
        {
          date: 'Freitag, 02.08',
          title: 'Kinoabend',
          person: 'Niwes',
          amount: 48.0
        },
        {
          date: 'Donnerstag, 01.08',
          title: 'Getränke',
          person: 'Sofia',
          amount: 27.5
        },
        {
          date: 'Mittwoch, 31.07',
          title: 'Snacks',
          person: 'Laura',
          amount: 16.0
        }
      ]
    }
  };

  const slug = data.slug;

  const group = groupData[slug] ?? groupData['barcelona-trip'];

  const total = group.expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );
</script>

<main class="app-shell">
  <section class="phone-card">
    <header class="top-bar">
      <a href="/" class="back">←</a>

      <h1>{group.name}</h1>

      <a href="/profile" class="profile-link">
        <div class="profile-human">
          <div class="human-head"></div>
          <div class="human-body"></div>
        </div>

        <small>Profil</small>
      </a>
    </header>

    <section class="total-card">
      <p>Gesamtausgaben</p>

      <strong>CHF {total.toFixed(2)}</strong>
    </section>

    <section class="settlement-card">
      <div>
        <p>Ausgleich</p>

        <strong>{group.settlement}</strong>

        <span>CHF {group.settlementAmount.toFixed(2)}</span>
      </div>

      <a href="/add" class="add-button">
        +
      </a>
    </section>

    <section class="expense-list">
      {#each group.expenses as expense, index}
        <article class="expense-item">
          <h2>{expense.date}</h2>

          <div class="expense-row">
            <div>
              <h3>{expense.title}</h3>

              <p>Bezahlt von {expense.person}</p>
            </div>

            <strong>
              CHF {expense.amount.toFixed(2)}
            </strong>
          </div>
        </article>

        {#if index < group.expenses.length - 1}
          <div class="divider"></div>
        {/if}
      {/each}
    </section>
  </section>
</main>

<style>
  :global(body) {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background: #eef3f8;
    color: #111827;
  }

  .app-shell {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding: 32px 16px;
  }

  .phone-card {
    width: 100%;
    max-width: 390px;
    min-height: 760px;
    background: white;
    border-radius: 36px;
    padding: 28px 22px;
    box-shadow: 0 20px 60px rgba(15, 23, 42, 0.18);
  }

  .top-bar {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 22px;
  }

  .back {
    text-decoration: none;
    color: #6b7280;
    font-size: 28px;
    line-height: 1;
    margin-top: 6px;
  }

  h1 {
    flex: 1;
    margin: 0;
    font-size: 28px;
    font-weight: 800;
  }

  .profile-link {
    text-decoration: none;
    color: #111827;
    text-align: center;
    font-size: 12px;
  }

  .profile-human {
    width: 42px;
    height: 42px;
    position: relative;
    margin: 0 auto 4px auto;
  }

  .human-head {
    width: 16px;
    height: 16px;
    background: #6b7280;
    border-radius: 50%;
    position: absolute;
    top: 4px;
    left: 13px;
  }

  .human-body {
    width: 26px;
    height: 16px;
    background: #6b7280;
    border-radius: 16px 16px 6px 6px;
    position: absolute;
    bottom: 2px;
    left: 8px;
  }

  .total-card {
    background: #e5e7eb;
    border-radius: 20px;
    padding: 18px;
    margin-bottom: 12px;
  }

  .total-card p {
    margin: 0 0 8px 0;
    font-size: 16px;
  }

  .total-card strong {
    font-size: 30px;
    font-weight: 800;
  }

  .settlement-card {
    background: #d7e8f8;
    border-radius: 20px;
    padding: 18px;
    margin-bottom: 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .settlement-card p {
    margin: 0 0 8px 0;
    color: #374151;
  }

  .settlement-card strong {
    display: block;
    font-size: 17px;
    margin-bottom: 8px;
  }

  .settlement-card span {
    font-weight: 800;
    font-size: 18px;
  }

  .add-button {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 2px solid #111827;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #111827;
    font-size: 36px;
    background: white;
  }

  .expense-list {
    background: #e5e7eb;
    border-radius: 22px;
    padding: 18px;
  }

  .expense-item h2 {
    margin: 0 0 12px 0;
    font-size: 17px;
    font-weight: 800;
  }

  .expense-row {
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }

  .expense-row h3 {
    margin: 0;
    font-size: 16px;
  }

  .expense-row p {
    margin: 4px 0 0 0;
    color: #4b5563;
    font-size: 13px;
  }

  .expense-row strong {
    white-space: nowrap;
    font-size: 15px;
  }

  .divider {
    height: 1px;
    background: #9ca3af;
    margin: 14px 0;
  }

  @media (max-width: 430px) {
    .app-shell {
      padding: 0;
      background: white;
    }

    .phone-card {
      min-height: 100vh;
      border-radius: 0;
      box-shadow: none;
    }
  }
</style>