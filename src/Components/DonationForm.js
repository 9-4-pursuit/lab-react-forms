
/* line 4 is the exporting of the component*/

export default function DonationForm() {
    return null;

  export default function DonationForm(props) {
    return (
      <section className="donation">
        <h3>You could be donation <span class="secondary">#{props.donations.length+1}!</span></h3>
        <form>
          <label htmlForm="name">Name
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name..." />
          </label>
          <label htmlForm="caption">Caption
            <input
              id="caption"
              name="caption"
              type="text"
              placeholder="Add a brief message..." />
          </label>
          <label htmlForm="amount">Amount
            <input
              id="amount"
              name="amount"
              type="number"
              placeholder="0" />
          </label>
          <button>Donate!</button>
        </form>
      </section>
    )
  }
}
