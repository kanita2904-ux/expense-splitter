<script>
  import { goto } from '$app/navigation';

  let groupName = '';
  let memberName = '';
  let members = [];

  function addMember() {
    if (memberName.trim() === '') return;

    members = [...members, memberName.trim()];
    memberName = '';
  }

  function saveGroup() {
    if (groupName.trim() === '') {
      alert('Bitte gib einen Gruppennamen ein.');
      return;
    }

    alert('Gruppe erfolgreich erstellt.');

    goto('/');
  }
</script>

<main class="page">
  <section class="card">
    <header class="top">
      <a href="/" class="back">←</a>

      <h1>Gruppe erstellen</h1>
<a href="/profile" class="profile-link">
  <div class="profile-human">
    <div class="human-head"></div>
    <div class="human-body"></div>
  </div>
</a>
    </header>

    <div class="field">
      <label>Gruppenname</label>

      <input
        bind:value={groupName}
        placeholder="z.B. Barcelona Trip"
      />
    </div>

    <div class="field">
      <label>Mitglieder hinzufügen</label>

      <div class="member-row">
        <input
          bind:value={memberName}
          placeholder="Name eingeben"
        />

        <button type="button" on:click={addMember}>
          +
        </button>
      </div>
    </div>

    {#if members.length > 0}
      <section class="members-card">
        <h2>Mitglieder</h2>

        {#each members as member}
          <div class="member-item">
            {member}
          </div>
        {/each}
      </section>
    {/if}

    <button
      class="save-button"
      type="button"
      on:click={saveGroup}
    >
      Gruppe speichern
    </button>
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
    margin-bottom: 42px;
  }

  .back {
    text-decoration: none;
    font-size: 28px;
    color: #111827;
  }

  h1 {
    flex: 1;
    font-size: 28px;
    margin: 0;
    font-weight: 800;
  }

  .profile-link {
    text-decoration: none;
  }

  .profile-human {
    width: 42px;
    height: 42px;
    position: relative;
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

  .field {
    margin-bottom: 26px;
  }

  label {
    display: block;
    font-weight: 800;
    margin-bottom: 10px;
    font-size: 18px;
  }

  input {
    width: 100%;
    box-sizing: border-box;
    padding: 16px;
    border: none;
    border-radius: 16px;
    background: #d7e8f8;
    font-size: 16px;
    outline: none;
  }

  .member-row {
    display: flex;
    gap: 12px;
  }

  .member-row button {
    width: 54px;
    border: none;
    border-radius: 50%;
    background: #e5e7eb;
    font-size: 30px;
    cursor: pointer;
  }

  .members-card {
    background: #e5e7eb;
    border-radius: 20px;
    padding: 18px;
    margin-top: 10px;
  }

  .members-card h2 {
    margin-top: 0;
    font-size: 18px;
  }

  .member-item {
    background: white;
    padding: 12px;
    border-radius: 12px;
    margin-bottom: 10px;
    font-weight: bold;
  }

  .save-button {
    margin-top: auto;
    padding: 20px;
    border: none;
    border-radius: 18px;
    background: #bcd3e8;
    font-size: 18px;
    font-weight: 800;
    cursor: pointer;
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