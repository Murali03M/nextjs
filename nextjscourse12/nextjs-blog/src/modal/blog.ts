import  { Schema, model, models } from 'mongoose';

// Define your Blog schema
const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

// Check if the model already exists, otherwise create it
const Blog = models.Blog || model('Blog', BlogSchema);

export default Blog;
