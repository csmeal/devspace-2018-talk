import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  private clientId =
    '355105365541-0rc1biv5lslii95eqovckmkhvkgbok9b.apps.googleusercontent.com';

  public user: any;
  public messages = [
    {
      title: 'Welcome to the app!',
      description: 'I hope you enjoy your stay!'
    },
    {
      title: 'Another message!',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu nisi libero. Aliquam eu enim quis elit vehicula maximus nec vitae leo. Nulla convallis augue sit amet interdum facilisis. Etiam rutrum tortor eget mauris faucibus sollicitudin. Mauris at risus vehicula, mattis neque id, ultricies magna. Praesent gravida ac tortor eget facilisis. Maecenas a rutrum erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed at tempor ligula. Curabitur non mollis nulla. Nam ac placerat magna, vitae euismod nibh. Vivamus iaculis sem viverra, imperdiet quam eu, tincidunt mauris. Phasellus vel eros eget felis iaculis congue.'
    },
    {
      title: 'Once more into the breach',
      description: 'Once more unto the breach, dear friends, once more; '
    }
  ];
  constructor(private authService: AuthService) {}

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  logOut(): void {
    this.authService.signOut().then(() => (this.user = null));
  }

  ngOnInit() {
    this.user = {
      firstName: 'Chris',
      photoUrl:
        'https://lh3.googleusercontent.com/-09vrZoENpbM/AAAAAAAAAAI/AAAAAAAABoE/z91roOM0gng/s96-c/photo.jpg'
    };
    // this.authService.authState.subscribe(user => {
    //   console.log(user);
    //   this.user = user;
    // });
  }
}
