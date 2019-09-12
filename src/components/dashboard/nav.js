export default {
    items: [
      {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'cui-speedometer icons',
        badge: {
          variant: 'info',
          text: 'NEW'
        }
      },
      {
        name: 'Disabled',
        url: '/dashboard',
        icon: 'cui-ban icons',
        attributes: { disabled: true },
      }
    ]
  };
  