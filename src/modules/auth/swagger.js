/**
 * @swagger
 * tags :
 *  name : Auth
 *  description : auth modules and routes
 */

/**
 * @swagger
 *  components :
 *      schemas :
 *          SendOTP :
 *              type : object
 *              required :
 *                  -   mobile
 *              properties :
 *                  mobile :
 *                      type : string
 *
 *          CheckOTP :
 *              type : object
 *              required :
 *                  -   mobile
 *                  -   code
 *              properties :
 *                  mobile :
 *                      type : string
 *                  code :
 *                      type : string
 */

/**
 * @swagger
 * /auth/send-otp :
 *  post :
 *      summary : login with OTP
 *      tags :
 *          -   Auth
 *      requestBody :
 *          content :
 *              application/x-www-form-urlencoded :
 *                  schema :
 *                      $ref : "#components/schemas/SendOTP"
 *      responses :
 *          200 :
 *              description : success
 *
 * /auth/check-otp :
 *  post :
 *      summary : check otp code for login
 *      tags :
 *          -   Auth
 *      requestBody :
 *          content :
 *              application/x-www-form-urlencoded :
 *                  schema :
 *                      $ref : "#components/schemas/CheckOTP"
 *      responses :
 *          200 :
 *              description : success
 *
 * /auth/logout :
 *  get :
 *      summary : user logout
 *      tags :
 *          -   Auth
 *      responses :
 *          200 :
 *              description : success
 *
 */
