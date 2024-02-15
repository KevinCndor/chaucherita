import React from 'react'

const Panel = ({top, left, center}) => {
  return (
    <>
      <div>
        <header>
          {top}
        </header>
        <main>
          <section>
            {left}
          </section>
          <section>
            {center}
          </section>
        </main>
      </div>
    </>
  )
}

export default Panel