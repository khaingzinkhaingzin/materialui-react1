import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordian";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BasicModal from "../components/Modal";

const Tour = () => (
	<Container sx={{ width: 900 }}>
		<Typography variant="h3" component="h1" marginTop={3}>
			Explore the world in Vagas
		</Typography>
		<Box marginTop={3} sx={{ display: "flex" }}>
			<img
				src="https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg"
				alt=""
				height={200}
			/>
			<ImageCollage />
		</Box>
		<Box>
			<Typography variant="h6" component="h4" marginTop={3}>
				About this ticket
			</Typography>
			<Typography variant="paragraph" component="p" marginTop={3}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eligendi
				maiores placeat mollitia quasi quos? Sunt nam eligendi cumque hic
				aspernatur quae deserunt voluptatibus dolore inventore rem maiores
				veritatis, blanditiis architecto possimus laudantium aperiam sed
				voluptas, voluptatum exercitationem, repellat consequatur!
			</Typography>
		</Box>
		<Box marginBottom={5}>
			<Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
				Frequently Asked Questions
			</Typography>
			<CustomizedAccordions />
		</Box>
		<Paper
			sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
			elevation={3}
		>
			<BottomNavigation>
                <BasicModal/>
            </BottomNavigation>
		</Paper>
	</Container>
);
export default Tour;
