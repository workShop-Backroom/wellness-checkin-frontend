export interface Contact {
    id: string;
    name: string;
    image: string;
    lastCall: string;
    callType: string;
    close: boolean;
    phone: string;
    email: string;
    address: string;
    bio: string;
  }
  
  export const contactsData: Contact[] = [
    {
      id: "1",
      name: 'John Doe',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/037/319/213/small/happy-african-american-man-smiling-outdoor-portrait-of-young-happy-man-on-street-in-city-cheerful-joyful-handsome-person-guy-looking-at-camera-freedom-happiness-carefree-happy-people-concept-photo.jpg',
      lastCall: '2023-02-01',
      callType: 'Human',
      close: false,
      phone: '123-456-7890',
      email: 'john.doe@example.com',
      address: '123 Main St, Hometown, USA',
      bio: 'John is a software developer with a passion for coding and gaming. He enjoys exploring new technologies and building innovative projects in his free time.'
    },
    {
      id: "2",
      name: 'Jane Doe',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      lastCall: '2024-05-01',
      callType: 'AI',
      close: true,
      phone: 'N/A',
      email: 'N/A',
      address: 'N/A',
      bio: 'Jane Doe AI is a character based on the real Jane Doe. This AI character can interact with you using a cloned voice and simulate conversations as the real Jane would.'
    },
    {
      id: "3",
      name: 'Jansse Smith',
      image: 'https://images.pexels.com/photos/3761521/pexels-photo-3761521.jpeg?cs=srgb&dl=pexels-olly-3761521.jpg&fm=jpg',
      lastCall: '2024-02-01',
      callType: 'AI',
      close: false,
      phone: 'N/A',
      email: 'N/A',
      address: 'N/A',
      bio: 'Jansse Smith AI is a simulation of Jansse, designed to replicate his mannerisms and voice using advanced AI technology. Interactions with this AI are not real but based on data collected from the real Jansse.'
    },
    {
      id: "4",
      name: 'Andy Wu',
      image: 'https://media.istockphoto.com/id/1288538088/photo/portrait-young-confident-smart-asian-businessman-look-at-camera-and-smile.jpg?b=1&s=612x612&w=0&k=20&c=r6yIXD9qE6vwqcg3-5iIxL6v3O_lV75oLpDTDQn-o8Y=',
      lastCall: '2024-02-01',
      callType: 'AI',
      close: true,
      phone: 'N/A',
      email: 'N/A',
      address: 'N/A',
      bio: 'Andy Wu AI is a replica of Andy, created using machine learning algorithms. The AI mimics Andy\'s voice, allowing for interactive but simulated conversations.'
    }
  ];