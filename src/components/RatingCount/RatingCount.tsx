function RatingCount() {
  const marks: { [key: number]: number[] } = []
  let studentCounter = 0

  document.querySelectorAll('.user-list .user-item').forEach((item) => {
    const badge = item.querySelectorAll('.mark .badge__item')

    if (badge[0]) {
      studentCounter++

      const mark = Number(badge[0].textContent.replace(/\s+/g, ''))

      if (marks[mark]) {
        marks[mark].push(mark)
      } else {
        marks[mark] = [mark]
      }
    }
  })

  return (
    <div className="fst-italic text-center">
      <div className="fw-bold">Учнів у класі: {studentCounter}</div>
      {marks && (
        <ul>
          {Object.entries(marks).map(([key, value]) => (
            <li key={key}>
              Оцінка: <b>{key}</b> — Кількість: <span className="fw-bold">{value.length}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default RatingCount
