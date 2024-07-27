/**
 * @swagger
 * tags :
 *  name : Option
 *  description : Option module and routes
 */

/**
 * @swagger
 *  components :
 *      schemas :
 *          CreateOption :
 *              type : object
 *              required :
 *                  -   title
 *                  -   key
 *                  -   type
 *                  -   category
 *              properties :
 *                  title :
 *                      type : string
 *                  key :
 *                      type : string
 *                  category :
 *                      type : string
 *                  guid :
 *                      type : string
 *                  required :
 *                      type : string
 *                  type :
 *                      type : string
 *                      enum :
 *                          -   Number
 *                          -   String
 *                          -   Array
 *                          -   Boolean
 *                  enum :
 *                      type : array
 *                      items :
 *                          type : string
 *
 *          UpdateOption :
 *              type : object
 *              properties :
 *                  title :
 *                      type : string
 *                  key :
 *                      type : string
 *                  category :
 *                      type : string
 *                  guid :
 *                      type : string
 *                  required :
 *                      type : string
 *                  type :
 *                      type : string
 *                      enum :
 *                          -   Number
 *                          -   String
 *                          -   Array
 *                          -   Boolean
 *                  enum :
 *                      type : array
 *                      items :
 *                          type : string
 *
 *
 */

/**
 * @swagger
 * /option :
 *  post :
 *      tags :
 *          -   Option
 *      summary : create new options
 *      requestBody :
 *          content :
 *              application/x-www-form-urlencoded :
 *                  schema :
 *                      $ref : "#/components/schemas/CreateOption"
 *      responses :
 *          201 :
 *              description : created
 *  get :
 *      tags :
 *          -   Option
 *      summary : Getting all options
 *      responses :
 *          200 :
 *              description : success
 */

/**
 * @swagger
 * /option/by-category/{categoryId} :
 *  get :
 *      tags :
 *          -   Option
 *      summary : Getting the desired category option
 *      parameters :
 *          -   in : path
 *              name : categoryId
 *              type : string
 *      responses :
 *          200 :
 *              description : success
 */

/**
 * @swagger
 * /option/by-category-slug/{categorySlug} :
 *  get :
 *      tags :
 *          -   Option
 *      summary : Getting the desired category option
 *      parameters :
 *          -   in : path
 *              name : categorySlug
 *              type : string
 *      responses :
 *          200 :
 *              description : success
 */

/**
 * @swagger
 * /option/{optionId} :
 *  get :
 *      tags :
 *          -   Option
 *      summary : Getting the desired option
 *      parameters :
 *          -   in : path
 *              name : optionId
 *              type : string
 *      responses :
 *          200 :
 *              description : success
 *
 *  delete :
 *      tags :
 *          -   Option
 *      summary : Remove the desired option
 *      parameters :
 *          -   in : path
 *              name : optionId
 *              type : string
 *      responses :
 *          200 :
 *              description : success
 *
 *  put :
 *      tags :
 *          -   Option
 *      summary : update the desired option
 *      parameters : 
 *          -   in : path   
 *              name : optionId
 *              type : string
 *      requestBody :
 *          content :
 *              application/x-www-form-urlencoded :
 *                  schema :
 *                      $ref : "#/components/schemas/UpdateOption"
 *      responses :
 *          200 :
 *              description : success
 */
