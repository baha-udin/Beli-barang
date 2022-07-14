package com.belibarang;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
// react-native-splash-screen >= 0.3.1
import org.devio.rn.splashscreen.SplashScreen;
// react-native-splash-screen < 0.3.1
import com.cboy.rn.splashscreen.SplashScreen; 

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "beliBarang";
  }
  // for react navigation
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
  // for react-native-splash
  @Override
  protected void onCreate(Bundle savedInstanceState) {
      SplashScreen.show(this);  
      super.onCreate(savedInstanceState);
  }
}
