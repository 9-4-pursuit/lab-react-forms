

export default function Progress() {
    return null;
  export default function Progress(props) {
    return (
      <section className="progress">
        <h2>
          Raised <span className="secondary">${props.currentTotal}</span> of {' '}
          <span className="secondary">${props.targetAmount}</span>
        </h2>
      </section>
    )
  }
}