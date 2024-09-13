import { Grid, tableBodyClasses, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const UserForm = ({addUser, updateUser, submitted, data, isEdit}) => {

    const [id, setId] = useState();
    const [name, setName] = useState('');

    useEffect(() => {
        if (!submitted) {
            setId(0);
            setName('');
            }
        }, [submitted]
    );

    useEffect(() =>{
        if (data?.id && data.id !== 0) {
            setId(data.id);
            setName(data.name);
        }
    }, [data]);

    /*useEffect(() => {
        if (updated ? 'Add' : 'Update');
    }, [updated]);*/


    return (
        <Grid 
            container
            spacing={2}
            sx={{
               backgroundColor: '#ffffff',
               marginBottom: '30px',
               display: 'block',
            }}
        >
            <Grid item xs={12}>
                <Typography 
                    component="h1" 
                    sx={{ color: '#ff5733' }} 
                    fontSize={100}  
                    fontWeight={'bold'} 
                    display={'flex'}
                    marginLeft={'50px'}
                >
                    User Form
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography 
                    component="label" 
                    htmlFor="ID"
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                        fontWeight:'bold', 
                        alignItems:'center',  
                        justifyContent:'center',
                        display:'flex',
                    }}
                >
                    ID
                </Typography>
                <input 
                    type="number"
                    name="ID"
                    sx={{ width: '400px' }}
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography 
                    component="label" 
                    htmlFor="Name"
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                        fontWeight:'bold', 
                        alignItems:'center',  
                        justifyContent:'center',
                        display:'flex',
                    }}
                >
                    Name
                </Typography>
                <input 
                    type="text"
                    name="Name"
                    sx={{ width: '400px' }}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </Grid>

            <Grid item xs={12}>
                <button 
                    sx={{
                        margin: 'auto',
                        marginBottom: '20px',
                        backgroundColor: '#006eff',
                        color: '#ffffff',
                        marginLeft: '15px',
                        marginTop: '20px',
                        cursor: 'pointer',
                        padding: '10px 20px',
                        '&:hover': {
                            opacity: '0.7',
                            backgroundColor: '#0050d2',
                        },
                    }}
                    style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        marginLeft:'175px' }}
                    onClick={() => isEdit ? updateUser({id: id, name:name}) : addUser({id: id, name:name})}
                >
                    {
                        isEdit ? 'Update' : 'Add'
                    }
                </button>
            </Grid>
        </Grid>
    );
}

export default UserForm;
