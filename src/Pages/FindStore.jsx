import {Stack,Button, color} from "@chakra-ui/react"
import {Services} from "./Services"
import { Cities } from "./Cities"

export const FindStore=()=>{
    return(
        <>
    <div className="main">
        <div className="grid-container">
            <div className="grid-item">
                <p>Find A Store Near You</p>
            </div>
            <div className="grid-item-2">
                <p>Find a CaratLane store in your locality,the CaratLane family is growing everyday</p>
            </div>
            <div className="pincode_div">
                <span className="pin"></span>
                <input type='text' placeholder='Enter pincode or city' name='location' />
                <Stack direction='row' spacing={6} align='end'>
                    <Button colorScheme="purple" variant='ghost'>
                         Locate Me
                    </Button>
                </Stack>
            </div>
        </div>
    </div>
    <Cities/>
    <Services/>
    </>
    )
    
}