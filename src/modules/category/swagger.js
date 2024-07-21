/**
 * @swagger
 * tags :
 *  name : Category
 *  description : Category module and routes
 */

/**
 * @swagger
 *  components :
 *      schemas :
 *          CreateCategory :
 *              type : object
 *              required :
 *                  -   name
 *                  -   slug
 *                  -   icon
 *              properties :
 *                  name :
 *                      type : string
 *                  slug :
 *                      type : string
 *                  icon :
 *                      type : string
 *                  parent :
 *                      type : string
 *
 */

/**
 * @swagger
 * /category :
 *  post :
 *      summary : create Categories
 *      tags :
 *          -   Category
 *      requestBody :
 *          content :
 *              application/x-www-form-urlencoded :
 *                  schema :
 *                      $ref : "#/components/schemas/CreateCategory"
 *              application/json :
 *                  schema :
 *                      $ref : "#/components/schemas/CreateCategory"
 *      responses :
 *          200 :
 *              description : success
 *  get :
 *      summary : get list of all categories
 *      tags :
 *          -   Category
 *      responses :
 *          200 :
 *              description : success
 *
 */
