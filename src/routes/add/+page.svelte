<script>
  let amount = '';
  let paidBy = '';
  let description = '';
</script>

<main class="page">
  <section class="card">
    <header class="top">
      <a href="/" class="back">←</a>

      <h1>Ausgabe hinzufügen</h1>

      <a href="/profile" class="profile-link">
        <div class="profile-human">
          <div class="human-head"></div>
          <div class="human-body"></div>
        </div>
      </a>
    </header>

    <form class="form">
      <div class="field">
        <label>Betrag</label>

        <input
          bind:value={amount}
          placeholder="CHF 0.00"
          class="input-field"
        />
      </div>

      <div class="field">
        <label>Bezahlt von</label>

        <select
          bind:value={paidBy}
          class="select-field"
        >
          <option value="">Person auswählen</option>
          <option>Niwes</option>
          <option>Laura</option>
          <option>Marco</option>
          <option>Sofia</option>
        </select>
      </div>

      <div class="field">
        <label>Beschreibung</label>

        <input
          bind:value={description}
          placeholder="z.B. Tapas-Abendessen"
          class="input-field"
        />
      </div>

      <button
        type="submit"
        class="primary-button save-button"
      >
        Speichern
      </button>
    </form>
  </section>
</main>

<style>
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

  .form {
    display: flex;
    flex-direction: column;
    gap: 26px;
  }

  label {
    display: block;
    font-weight: 800;
    margin-bottom: 10px;
    font-size: 18px;
  }

  .save-button {
    margin-top: 120px;
  }
</style>