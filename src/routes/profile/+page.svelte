<script>
	// @ts-nocheck

	let { data } = $props();

	let profileName = $derived(data.profileName);
	let groups = $derived(data.groups);
	let groupCount = $derived(data.groupCount);
</script>
<main class="page">
  <section class="card">
    <header class="top">
      <a href="/" class="back-button">←</a>

      <h1>Profil</h1>

      <div class="profile-human">
        <div class="human-head"></div>
        <div class="human-body"></div>
      </div>
    </header>

    <section class="profile-section">
      <div class="large-human">
        <div class="large-head"></div>
        <div class="large-body"></div>
      </div>

      <div>
        <h2>{profileName}</h2>
<p>Aktives Mitglied in {groupCount} Gruppen</p>
      </div>
    </section>

    <section class="balance-card">
      <p>Dein aktueller Saldo</p>

      <div class="balance-row negative">
        <span>Du schuldest Laura</span>
        <strong>CHF 72.40</strong>
      </div>

      <div class="balance-row positive">
        <span>Sofia schuldet dir</span>
        <strong>CHF 18.20</strong>
      </div>

      <div class="divider"></div>

      <div class="total-row">
        <span>Total</span>
        <strong>- CHF 54.20</strong>
      </div>
    </section>

    <section class="groups-header">
      <h2>Deine Gruppen</h2>
      <a href="/" class="groups-button">Alle ansehen</a>
    </section>

    <section class="group-list">
      {#each groups as group}
        <a href={group.href} class="group-card">
          <div class="group-icon"></div>

          <div class="group-info">
            <h3>{group.name}</h3>
            <p>{group.members} Mitglieder</p>
          </div>

          <span class="arrow">›</span>
        </a>
      {/each}
    </section>
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
  }

  .top {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 28px;
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

  .profile-human,
  .large-human {
    position: relative;
  }

  .profile-human {
    width: 42px;
    height: 42px;
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

  .profile-section {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 28px;
  }

  .large-human {
    width: 62px;
    height: 62px;
  }

  .large-head {
    width: 22px;
    height: 22px;
    background: #6b7280;
    border-radius: 50%;
    position: absolute;
    top: 6px;
    left: 20px;
  }

  .large-body {
    width: 36px;
    height: 22px;
    background: #6b7280;
    border-radius: 20px 20px 8px 8px;
    position: absolute;
    bottom: 4px;
    left: 13px;
  }

  .profile-section h2 {
    margin: 0;
    font-size: 22px;
  }

  .profile-section p {
    margin: 5px 0 0;
    color: #6b7280;
  }

  .balance-card {
    background: #e5e7eb;
    border-radius: 22px;
    padding: 18px;
    margin-bottom: 28px;
  }

  .balance-card p {
    margin: 0 0 18px;
    font-weight: bold;
  }

  .balance-row,
  .total-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
  }

  .negative strong {
    color: #b91c1c;
  }

  .positive strong {
    color: #15803d;
  }

  .divider {
    height: 1px;
    background: #9ca3af;
    margin: 18px 0;
  }

  .total-row {
    font-weight: bold;
    margin-bottom: 0;
  }

  .groups-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
  }

  .groups-header h2 {
    margin: 0;
    font-size: 24px;
  }

  .groups-button {
    text-decoration: none;
    color: #2563eb;
    font-weight: bold;
  }

  .group-list {
    display: grid;
    gap: 14px;
  }

  .group-card {
    display: flex;
    align-items: center;
    gap: 14px;
    background: #e5e7eb;
    border-radius: 20px;
    padding: 16px;
    text-decoration: none;
    color: #111827;
  }

  .group-icon {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background: #b8bec8;
  }

  .group-info {
    flex: 1;
  }

  .group-info h3 {
    margin: 0;
    font-size: 18px;
  }

  .group-info p {
    margin: 5px 0 0;
    color: #6b7280;
  }

  .arrow {
    font-size: 28px;
    color: #6b7280;
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