import axios from 'axios';
import Error from 'next/error';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
      // Replace 'your_secret_key' with your actual reCAPTCHA secret key.
      const { token } = await request.json();
      const secretKey = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY;
      const response = await axios.post(
        'https://www.google.com/recaptcha/api/siteverify',
        null,
        {
          params: {
            secret: secretKey,
            response: token,
          },
        }
      );
  
      // Assuming the reCAPTCHA API responds with a JSON object.
      const { "success":success, "error-codes":errorCodes } = response.data;
  
      if (success) {
        // Token is valid, perform your actions for a valid token.
        console.log('reCAPTCHA validation successful');
        return NextResponse.json({
            status: 200,
            success: true,
            message: "reCAPTCHA validation successful"
        })
      } else {
        // Token is invalid, log the error codes.
        console.error('reCAPTCHA validation failed with error codes:', errorCodes);
        return NextResponse.json({
          success: false,
          message: "reCAPTCHA validation failed with error codes " + errorCodes
        })
      }
    } catch (error: any) {
      // Handle any errors that occur during the validation process.
      console.error('Error validating reCAPTCHA token: ', error.message)
      return NextResponse.json({
        success: false,
        message: "Error validating reCAPTCHA token: " + error.message
      })
    }
  };