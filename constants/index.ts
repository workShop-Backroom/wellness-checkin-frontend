export interface Contact {
    id: string;
    name: string;
    image: string;
    lastCall: string;
    callType: string;
    close: boolean;
  }
  
export const contactsData: Contact[] = [
    {
      id: "1",
      name: 'John Doe',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/037/319/213/small/happy-african-american-man-smiling-outdoor-portrait-of-young-happy-man-on-street-in-city-cheerful-joyful-handsome-person-guy-looking-at-camera-freedom-happiness-carefree-happy-people-concept-photo.jpg',
      lastCall: '2023-02-01',
      callType: 'Human',
      close: false,
    },
    {
      id: "2",
      name: 'Jane Doe',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      lastCall: '2024-05-01',
      callType: 'AI',
      close: true,
  
    },
    {
      id: "3",
      name: 'Jansse Smith',
      image: 'https://images.pexels.com/photos/3761521/pexels-photo-3761521.jpeg?cs=srgb&dl=pexels-olly-3761521.jpg&fm=jpg',
      lastCall: '2024-02-01',
      callType: 'AI',
      close: false,
    },
    {
        id: "4",
        name: 'Andy Wu',
        image: 'https://media.istockphoto.com/id/1288538088/photo/portrait-young-confident-smart-asian-businessman-look-at-camera-and-smile.jpg?b=1&s=612x612&w=0&k=20&c=r6yIXD9qE6vwqcg3-5iIxL6v3O_lV75oLpDTDQn-o8Y=',
        lastCall: '2024-02-01',
        callType: 'AI',
        close: true,
      }
  ];