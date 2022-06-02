export const dataContact = {
  title: 'Contact',
  des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sit nibh amet egestas tellus.',
  list: [
    {
      id: 1,
      type: 'phone',
      icon :'assets/images/phone.png',
      content: ['+452 666 386', '+465 562 226'],
    },
    {
      id: 2,
      type: 'email',
      icon :'assets/images/email.png',
      content: ['support@gmail.com', 'example@support.com'],
    },
    {
      id: 3,
      type: 'address',
      icon :'assets/images/location.png',
      content: ['Envato 121 King St,', 'Melbourne, Australia'],
    },
  ],
  form: {
    para: "I'm always open to discussing product",
    strong: 'design work or partnerships.',
    input: [
      {
        id: 1,
        child: 'input',
        type:'text',
        name: 'name',
        placeholder: 'Name *',
      },
      {
        id: 2,
        child: 'input',
        type:'email',
        name: 'email',
        placeholder: 'Email *',
      },
      {
        id: 3,
        child: 'textarea',
        type:'text',
        name: 'message',
        placeholder: 'Message *',
      },
      {
        id: 4,
        child: 'button',
        type:'submit',
        name: 'submit',
        placeholder: 'Submit',
      },
    ],
  },
};
