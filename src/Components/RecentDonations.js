


export default function RecentDonations() {
    return null;
  }
  export default function RecentDonations(props) {
      const listItems = props.donations.map(donation => {
          return (
              <li><span>{donation.name} donated ${donation.amount}</span>{donation.caption}</li>
          );
      });
      return (
          <section>
              <h2>Recent Donations</h2>
              <ul>{listItems}</ul>
          </section>
      );
  }