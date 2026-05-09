<script>
  const groups = [
    {
      name: 'Barcelona Trip',
      members: 4,
      total: 889.75,
      href: '/groups/barcelona-trip'
    },
    {
      name: 'WG Zürich',
      members: 3,
      total: 170.4,
      href: '/groups/wg-zuerich'
    },
    {
      name: 'Freunde',
      members: 5,
      total: 91.5,
      href: '/groups/freunde'
    }
  ];
</script>

<main class="page">
  <section class="card">
    <header class="top">
      <a href="/" class="back-button">←</a>

      <h1>Gruppen</h1>

      <a href="/profile" class="profile-link">
        <div class="profile-human">
          <div class="human-head"></div>
          <div class="human-body"></div>
        </div>
        <small>Profil</small>
      </a>
    </header>

    <section class="group-list">
      {#each groups as group}
        <a href={group.href} class="group-card">
          <div class="group-icon"></div>

          <div class="group-info">
            <h2>{group.name}</h2>
            <p>{group.members} Mitglieder</p>
            <span>CHF {group.total.toFixed(2)}</span>
          </div>

          <strong>›</strong>
        </a>
      {/each}
    </section>

    <a href="/groups/add" class="create-button">Neue Gruppe erstellen</a>
  </section>
</main>

<style>
  :global(body) {
    margin: 0;
    background: #eef3f8;
    font-family: Arial, Helvetica, sans-serif;
    color: #111827;
  }

  .page {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding: 32px 16px;
  }

  .card {
    width: 100%;
    max-width: 390px;
    min-height: 760px;
    background: white;
    border-radius: 36px;
    padding: 28px 22px;
    box-shadow: 0 20px 60px rgba(15, 23, 42, 0.18);
    display: flex;
    flex-direction: column;
  }

  .top {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 30px;
  }

  .back-button {
    text-decoration: none;
    color: #6b7280;
    font-size: 28px;
  }

  h1 {
    flex: 1;
    margin: 0;
    font-size: 30px;
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
    margin: 0 auto 4px;
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

  .group-list {
    display: grid;
    gap: 14px;
  }

  .group-card {
    display: grid;
    grid-template-columns: 48px 1fr auto;
    align-items: center;
    gap: 14px;
    background: #e5e7eb;
    border-radius: 20px;
    padding: 16px;
    color: #111827;
    text-decoration: none;
  }

  .group-icon {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #b8bec8;
  }

  .group-info h2 {
    margin: 0;
    font-size: 18px;
  }

  .group-info p {
    margin: 4px 0;
    color: #4b5563;
  }

  .group-info span {
    font-weight: bold;
  }

  .group-card strong {
    font-size: 30px;
    color: #6b7280;
  }

  .create-button {
    margin-top: auto;
    background: #bcd3e8;
    color: #111827;
    text-decoration: none;
    text-align: center;
    padding: 20px;
    border-radius: 18px;
    font-weight: 800;
  }

  @media (max-width: 430px) {
    .page {
      padding: 0;
      background: white;
    }

    .card {
      min-height: 100vh;
      border-radius: 0;
      box-shadow: none;
    }
  }
</style>