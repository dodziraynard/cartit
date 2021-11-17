import axios from "axios";

import { GET_CATEGORIES, ADD_CATEGORY, UPDATE_CATEGORY, 
        DELETE_CATEGORY, ADD_SUBCATEGORY, UPDATE_SUBCATEGORY, 
        GET_ERRORS, GET_SUBCATEGORIES, DELETE_SUBCATEGORY } from "./types";
import { createMessage } from "./messages";
import { tokenConfig, formDataTokenConfig, alertWithError } from "./helperFunctions";


//GET CATEGORIES
export const getCategories = () => (dispatch, getState) =>{
    axios
    .get(`${  process.env.REACT_APP_DOMAIN_NAME }/api/categories`, tokenConfig(getState))
    .then(res => {
        dispatch({
            type: GET_CATEGORIES, 
            payload: res.data
        });
    })
    .catch(err => {
        try {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            }) 
        } catch (error) {
            console.log(error)
            dispatch(createMessage({unknownError: "Ooops, Something went wrong. Are you online?"}))
        }
    })
}

//ADD CATEGORY
export const addCategory = (category) => (dispatch, getState) =>{
        
    let form_data = new FormData();
    const { name, description, image } = category;
    form_data.append("name", name);
    form_data.append("description", description);
    form_data.append("image", image, image.name);
    
    axios
    .post(`${  process.env.REACT_APP_DOMAIN_NAME }/api/categories/`, form_data, formDataTokenConfig(getState))
    .then(res => {
        dispatch(createMessage({successfulPost: "Category Added"}))
        dispatch({
            type: ADD_CATEGORY, 
            payload: res.data
        });
    })
    .catch(err => {
        dispatch(createMessage({unknownError: "Ooops, Something went wrong. Are you online?"}))
        const errors = {
            msg: err.response.data,
            status: err.response.status
        }
        dispatch({
            type: GET_ERRORS,
            payload: errors
        }) 
    })
}

//UPDATE CATEGORY
export const updateCategory = (id, fields) => (dispatch, getState) =>{
        
    let form_data = new FormData();
    const { name, description, image } = fields;
    if(name)
        form_data.append("name", name);
    if(description)
        form_data.append("description", description);
    if(image)
        form_data.append("image", image, image.name);
    
    axios
    .patch(`${  process.env.REACT_APP_DOMAIN_NAME }/api/categories/${id}/`, form_data, formDataTokenConfig(getState))
    .then(res => {
        dispatch(createMessage({successfulPost: "Category Updated"}))
        dispatch({
            type: UPDATE_CATEGORY, 
            payload: res.data
        });
    })
    .catch(err => {
        dispatch(createMessage({unknownError: "Ooops, Something went wrong. Are you online?"}))
        const errors = {
            msg: err.response.data,
            status: err.response.status
        }
        dispatch({
            type: GET_ERRORS,
            payload: errors
        }) 
    })
}

//DELETE CATEGORY
export const deleteCategory = (id) => (dispatch, getState) =>{
    axios
    .delete(`${  process.env.REACT_APP_DOMAIN_NAME }/api/categories/${id}/`, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({successfulPost: "Category Deleted"}))
        dispatch({
            type: DELETE_CATEGORY, 
            payload: id
        });
    })
    .catch(err => {
       alertWithError(err, dispatch);
    })
}

// ADD SUBCATEGORY
export const addSubCategory = (subCategory) => (dispatch, getState) =>{
    let form_data = new FormData();
    const { name, description, image, category } = subCategory;
    form_data.append("name", name);
    form_data.append("category", category);
    form_data.append("description", description);
    form_data.append("image", image, image.name);
    
    axios
    .post(`${  process.env.REACT_APP_DOMAIN_NAME }/api/category/sub/`, form_data, formDataTokenConfig(getState))
    .then(res => {
        dispatch(createMessage({successfulPost: "SubCategory Added"}))
        dispatch({
            type: ADD_SUBCATEGORY, 
            payload: res.data
        });
    })
    .catch(err => {
        dispatch(createMessage({unknownError: "Ooops, Something went wrong. Are you online?"}))
        const errors = {
            msg: err.response.data,
            status: err.response.status
        }
        dispatch({
            type: GET_ERRORS,
            payload: errors
        }) 
    })
}

// UPDATE SUBCATEGORY
export const updateSubCategory = (id, subCategory) => (dispatch, getState) =>{
    let form_data = new FormData();
    const { name, description, image, category } = subCategory;
    console.log(image)

    if(name)
        console.log(name)
        form_data.append("name", name);
    if(category)
        console.log(category)
        form_data.append("category", category);
    if(description)
        console.log(description)
        form_data.append("description", description);
    if(image)
        form_data.append("image", image, image.name);
    
    axios
    .patch(`${  process.env.REACT_APP_DOMAIN_NAME }/api/category/sub/${id}/`, form_data, formDataTokenConfig(getState))
    .then(res => {
        dispatch(createMessage({successfulPost: "SubCategory Updated"}))
        dispatch({
            type: UPDATE_SUBCATEGORY, 
            payload: res.data
        });
    })
    .catch(err => {
        dispatch(createMessage({unknownError: "Ooops, Something went wrong. Are you online?"}))
        const errors = {
            msg: err.response.data,
            status: err.response.status
        }
        dispatch({
            type: GET_ERRORS,
            payload: errors
        }) 
    })
}

//GET SUBCATEGORIES
export const getSubCategories = (category) => (dispatch, getState) =>{
    axios
    .get(`${ process.env.REACT_APP_DOMAIN_NAME }/api/${category}/subcategories`, tokenConfig(getState))
    .then(res => {
        console.log(res.data)
        dispatch({
            type: GET_SUBCATEGORIES, 
            payload: res.data,
        });
    })
    .catch(err => {
        try {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            }) 
        } catch (error) {
            console.log(error)
            dispatch(createMessage({unknownError: "Ooops, Something went wrong. Are you online?"}))
        }
    })
}

//DELETE CATEGORY
export const deleteSubCategory = (id) => (dispatch, getState) =>{
    axios
    .delete(`${  process.env.REACT_APP_DOMAIN_NAME }/api/category/sub/${id}/`, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({successfulPost: "Category Deleted"}))
        dispatch({
            type: DELETE_SUBCATEGORY, 
            payload: id
        });
    })
    .catch(err => {
       alertWithError(err, dispatch);
    })
}