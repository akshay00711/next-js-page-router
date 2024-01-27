//import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';
import NewsletterRegistration from '../components/input/newsletter-registration';
import { getFeaturedEvents } from '../helpers/api-util';
import Head from 'next/head';

function HomePage(props) {
  //const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <Head>
        <title>Next JS Event</title>
        <meta name='description'
         content='This is the description of page'
        />
      </Head>
      <NewsletterRegistration/>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps(context){
  const featuredEvents = await getFeaturedEvents();
  return {
    props:{
      events:featuredEvents
    },
    revalidate : 1800 // for optimization check and revalidate on production 
  }
}

export default HomePage;
