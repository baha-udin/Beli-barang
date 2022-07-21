package com.belibarang;

import com.facebook.react.ReactActivity;
import android.os.Bundle;

import org.devio.rn.splashscreen.SplashScreen; // for react-native-splash-screen

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "beliBarang";
  }
  // // for react navigation
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    SplashScreen.show(this); 
  }
}
