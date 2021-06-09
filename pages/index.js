import Head from 'next/head'
import Image from 'next/image'
import SectionTitle from '../components/SectionTitle'

export default function Home() {
  return (
    <>
    <div className="hero">
      <img src="kind.jpg" />
    </div>
      <SectionTitle name="welcome" />
      <p>Welcome! My name is Emily, and I am a Certified Children's Life Coach, Elementary School Teacher, and Yoga & Mindfulness Instructor currently based in Glastonbury, CT.</p>
      <p>I created The Dreaming Tree from a calling in my heart that has led me to teach others how to live a more resilient and joyful life. <span className="red">I love to learn</span> and <span className="red">I love to teach</span>. My deepest desire is to empower others with the knowledge and support they need to live a magical life of joy, passion, and resilience.</p>
      <p>Through my journey of connecting with my authentic self and discovering my soul’s desires, I have obtained a bachelor’s degree in Communication Disorders, a master’s degree in Education, a certification in Children and Teen Coaching, a certification in Yoga for both children and adults and various trainings in relevant areas such as mindfulness, massage, and Reiki.</p>
      <p>At The Dreaming Tree, I offer workshops, classes, and individual coaching to help children, teens, and families dream beautiful dreams and live a life of love, light, and purpose. To learn more about me and what kind of work I do, please click on the “About Me” tab at the top of this page!</p>
    </>
  )
}
