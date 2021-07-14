import client from "../client";
import Event from "../components/Event";
import ImageUrlBuilder from '@sanity/image-url'

export default function EventsPage({...info}) {

  const eventsInfo = Object.values(info);

  const eventsArray = eventsInfo[0];

  // SANITY IMAGE BUILDER
  const builder = ImageUrlBuilder(client)

  // function to return the image url to pass to the image component
  function urlFor(source) {
    return builder.image(source)
  }

  const eventsComponents = eventsArray.map(
    (event) => {

      console.log("This is an event")
      console.log(event)

    //converts the datestring to a real date
    const eventDate = new Date(event.when)
    //map function
    return <Event
        img={urlFor(event.image).url()}
        title={event.name}
        when={`${eventDate.toLocaleDateString()} at ${eventDate.toLocaleTimeString([],{hour: 'numeric', minute:"2-digit"})}`}
        where={event.where}
        cost={event.cost}
        costDescription={event.costDescription}
        description={event.description}
      />
  })
  

  return (
    <>
      {eventsComponents}
    </>
  )
}

export async function getServerSideProps(context) {
  // returns a list of all of the events
  const info = await client.fetch('*[_type == "event"] | order(when)')
  return {
    props: { info }
  }
}