interface HomePageProps {
  tagLine?: string
}

const HomePage = ({ tagLine }: HomePageProps) => {
  return (
    <>
      <h1>Home page</h1>
      {tagLine && <div>{tagLine}</div>}
    </>
  )
}

export { HomePage }
