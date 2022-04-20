export default function Page () {
  const { id } = useParams()

  return (
    <div className='grid h-screen place-content-center'>
      {id}
    </div>
  )
}
