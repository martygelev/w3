import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const BlogList = ({ blogs }) => {
  return (
    <Container maxWidth="xl">
      <div className="divide-y divide-gray-200">
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          {blogs.map((blog) => (
            <Item className="wd-300">
              <div key={blog.id}>
                <h2> {blog.title}</h2> with ID: <b>{blog.id}</b>
                <h4>Written by {blog.author}</h4>
                <p> {blog.body}</p>
                <hr />
                <div>
                  <h3>Keywords:</h3>
                  {blog.keywords.map((keyword) => (
                    <p className="py-1 flex" key={keyword}>
                      {keyword}
                    </p>
                  ))}
                </div>
              </div>
            </Item>
          ))}
        </Stack>
      </div>
    </Container>
  );
};

export default BlogList;