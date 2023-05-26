import Image from 'next/image'
import Card from '@/components/card'

export default function Home() {
  return (
    <main className="flex flex-col">

      <div className='w-full flex justify-center align-center px-5 py-8'>
        <p className='text-center'>
          Experienced Instructional Designer & Curriculum Developer.<br />
          Passionate about creating engaging learning experiences.<br />
          Former educator with a background in Science.<br />
        </p>
      </div>

      <Card image='/1-Butterfly.png' imageAlt='Butterfly life cycle on a monitory' title='Butterfly lifecycle'
        description="As an instructional designer, I developed a project that utilized the
        ADDIE model to create an effective learning experience on the lifecycle of a butterfly.
        The project employed Bloom's Taxonomy to structure learning objectives and utilized a variety of
        instructional strategiesto engage learners, including interactive activities, multimedia elements,
        and formative assessments. Through this project, learners were able to progress through
        the stages of the learning process, from acquiring knowledge about the topic to applying and
        analyzing their understanding." />

      <Card image='/2-Volcano.png' imageAlt='Volcano on a monitor' title='Volcanoes'
        description="The Volcanoes Lesson instructional design project resulted in an immersive and
        dynamic learning experience that deepened students' understanding of volcanoes.
        By employing a learner-centered approach and integrating a range of engaging instructional
        strategies, students actively participated in hands-on activities, discussions, and
        multimedia exploration. The lesson successfully achieved its objectives of promoting conceptual
        understanding, encouraging active engagement, and fostering connections between volcanoes and the real world." />

      <Card image='/3-SimpleMachine.png' imageAlt='Simple machines on a monitor' title='Simple Machines'
        description="The Simple Machines Instructional Design Project resulted in a well-structured and
        immersive learning experience that fostered students' understanding of simple machines.
        By employing a learner-centered approach and incorporating interactive elements, students
        were actively engaged in hands-on activities, experiments, and problem-solving scenarios.
        The project successfully achieved its goals of promoting knowledge acquisition, application,
        and analysis, while fostering students' appreciation for the real-world applications of simple machines." />

    </main>
  )
}
