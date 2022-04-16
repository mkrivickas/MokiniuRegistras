import React from 'react';
import { useForm } from 'react-hook-form';


export default function RegistrationForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        };
        fetch('http://localhost:3000/api/v1/students', requestOptions).then(response => response.json());
    }

    return (
        <div className='col-8 offset-2'>
            <h2> Pridėti studentą</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-3'>
                    <label htmlFor='firstName' className='form-label'>
                        Vardas
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='firstName'
                        {...register('firstName', { required: true })}
                        defaultValue='Jonas'
                        // pattern='/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]+{2, 40}'
                    />
                    {errors.firstName && (
                        <span className='text-danger fw-light'>
                            This field is required
                        </span>
                    )}
                </div>
                <div className='mb-3'>
                    <label htmlFor='lastname' className='form-label'>
                        Pavardė
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='lastname'
                        {...register('lastname', { required: true })}
                        defaultValue='Jonaitis'
                        // pattern='/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]+{2, 40}'
                    />
                    {errors.lastname && (
                        <span className='text-danger fw-light'>
                            This field is required
                        </span>
                    )}
                </div>
                <div className='mb-3'>
                    <label htmlFor='date' className='form-label'>
                        Gimimo data
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='date'
                        {...register('date', { required: true })}
                        defaultValue='1980-05-14'
                        pattern='([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))'
                    />
                    {errors.program && (
                        <span className='text-danger fw-light'>
                            This field is required
                        </span>
                    )}
                </div>
                <div className='mb-3'>
                    <label htmlFor='city' className='form-label'>
                        Miestas
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='city'
                        {...register('city', { required: true })}
                        defaultValue='Akmenė'
                        // pattern='/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]+{2, 40}'
                    />
                    {errors.group && (
                        <span className='text-danger fw-light'>
                            This field is required
                        </span>
                    )}
                </div>
                <div className='mb-3'>
                    <label htmlFor='program' className='form-label'>
                        Programa
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='program'
                        {...register('program', { required: true })}
                        defaultValue='JavaScript'
                        // pattern='/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]+{2, 40}'
                    />
                    {errors.group && (
                        <span className='text-danger fw-light'>
                            This field is required
                        </span>
                    )}
                </div>
                <div className='mb-3'>
                    <label htmlFor='group' className='form-label'>
                        Grupė
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='group'
                        {...register('group', { required: true })}
                        defaultValue='JS1'
                    />
                    {errors.group && (
                        <span className='text-danger fw-light'>
                            This field is required
                        </span>
                    )}
                </div>

                <button type='submit' className='col-6 btn btn-success'>
                    Pridėti studentą
                </button>
                <input type='search' className='col-12 m-1' placeholder='Ieškoti mokinio' ></input>
                <button type='button' className='col-6 btn btn-primary' >Atnaujinti sarasa</button>
                
            </form>
        </div>
    );
}
